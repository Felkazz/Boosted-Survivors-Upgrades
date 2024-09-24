const computePosition = window.FloatingUIDOM.computePosition;
const flip = window.FloatingUIDOM.flip;
const shift = window.FloatingUIDOM.shift;
const limitShift = window.FloatingUIDOM.limitShift;

const LAYOUTS = [
    {
        name: "random",
        fit: true,
        padding: 10
    },
    {
        name: "grid",
        fit: true,
        padding: 10
    },
    {
        name: "circle",
        fit: true,
        padding: 10,
        clockwise: true
    },
    {
        name: "concentric",
        fit: true,
        padding: 10,
        clockwise: true,
        spacingFactor: 2
    },
    {
        name: "breadthfirst",
        fit: true,
        directed: true,
        padding: 10,
        circle: false,
        grid: true,
        spacingFactor: 1
    },
    {
        name: "cose",
        fit: true,
        directed: true,
        padding: 10,
        spacingFactor: 1
    },
    {
        name: "dagre",
        fit: true,
        directed: true,
        padding: 10
    },
    {
        name: "klay",
        fit: true,
        directed: true,
        padding: 10
    }
];

var cy;

// https://github.com/cytoscape/cytoscape.js-popper?tab=readme-ov-file#usage-with-floating-ui
function popperNodeTooltip(ref, content, opts) {
    // see https://floating-ui.com/docs/computePosition#options
    const popperOptions = {
        // matching the default behaviour from Popper@2
        // https://floating-ui.com/docs/migration#configure-middleware
        middleware: [
            flip(),
            shift({ limiter: limitShift() })
        ],
        ...opts,
    }

    function update(visible) {
        computePosition(ref, content, popperOptions).then(({ x, y }) => {
            Object.assign(content.style, {
                left: `${x}px`,
                top: `${y}px`,
            });
        });
        if (visible === true) {
            content.classList.add("card_container_visible");
        } else if (visible === false) {
            content.classList.remove("card_container_visible");
        }
    }
    update();
    return { update };
}

function generateCard(upgrade) {
    const div = document.createElement("div");
    div.classList.add("card_container");
    const table = document.createElement("table");
    table.classList.add("card_table");
    let tbody = document.createElement("thead");
    tbody.classList.add("card_head");
    let tr = document.createElement("tr");
    tr.classList.add("bottom_border");
    let td = document.createElement("th");
    td.colSpan = 2;
    const img = document.createElement("img");
    img.src = "images/" + upgrade.image;
    td.appendChild(img);
    const span = document.createElement("span");
    span.textContent = upgrade.name;
    td.appendChild(span);
    tr.appendChild(td);
    tbody.appendChild(tr);
    table.appendChild(tbody);
    tbody = document.createElement("tbody");
    tbody.classList.add("card_body");
    if (upgrade.description !== "") {
        tr = document.createElement("tr");
        tr.classList.add("bottom_border");
        td = document.createElement("td");
        td.colSpan = 2;
        td.textContent = upgrade.description;
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    if (upgrade.unlock.length > 0) {
        tr = document.createElement("tr");
        tr.classList.add("bottom_border");
        td = document.createElement("td");
        td.colSpan = 2;
        td.textContent = "Unlock conditions:";
        upgrade.unlock.forEach(condition => {
            td.textContent += " " + condition + ".";

        });
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    upgrade.stats.forEach(stat => {
        tr = document.createElement("tr");
        td = document.createElement("td");
        td.colSpan = 2;
        td.textContent = stat.name + ": " + stat.base;
        tr.appendChild(td);
        if (stat.boost !== 0) {
            td.colSpan = 1;
            td = document.createElement("td");
            td.textContent = "-/+ " + stat.boost;
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    });
    table.classList.add("bottom_border");
    table.appendChild(tbody);
    div.appendChild(table);
    return div;
}

function upgradeNameToID(upgradeName) {
    return upgradeName.toLowerCase().replace(/[^a-z0-9]/g, "_");
}

function destroyCy() {
    const popperContainer = document.getElementById("popper_container");
    while (popperContainer.firstChild) {
        popperContainer.removeChild(popperContainer.lastChild);
    }
    cy.destroy();
}

function generateNodes(upgrades, container) {
    if (cy) {
        destroyCy();
    }
    let cyElements = [];
    let cyStyle = [];
    let cyEdges = [];
    let popperTooltips = [];
    cyStyle.push({
        selector: "node",
        style: {
            "shape": "rectangle",
            "background-color": "#2d2d2d",
            "width": "50px",
            "height": "50px",
            "background-image-crossorigin": "null",
            "background-fit": "contain"
        }
    });
    const layout = LAYOUTS[document.getElementById("layout").selectedIndex];
    cyStyle.push({
        selector: "edge",
        style: {
            "curve-style": "straight",
            "source-endpoint": "outside-to-node",
            "target-endpoint": "outside-to-node",
            "arrow-scale": 1.5,
            "target-arrow-shape": "triangle"
        }
    });
    const popperContainer = document.getElementById("popper_container");
    upgrades.forEach(upgrade => {
        let id = upgradeNameToID(upgrade.name);
        cyElements.push({
            group: "nodes",
            data: {
                id: id
            }
        });
        upgrade.connectTo.forEach(evolution => {
            let evoID = upgradeNameToID(evolution);
            cyEdges.push({
                group: "edges",
                data: {
                    id: id + "-" + evoID,
                    source: id,
                    target: evoID
                }
            });
        });
        cyStyle.push({
            selector: "#" + id,
            style: {
                "background-image": "images/" + upgrade.image.replace(".png", "_big.png"),
            }
        });
        popperTooltips.push({
            content: () => {
                /*let div = document.createElement("div");
                div.classList.add("node_img_container");
                let img = document.createElement("img");
                img.classList.add("node_img");
                img.src = "images/" + upgrade.image;
                div.appendChild(img);
                popperContainer.appendChild(div);
                return div;*/
                let tooltip = generateCard(upgrade);
                popperContainer.appendChild(tooltip);
                return tooltip;
            }
        });
    });
    cy = cytoscape({
        container: container,
        elements: cyElements.concat(cyEdges),
        style: cyStyle,
        layout: layout,
        zoomingEnabled: true,
        userZoomingEnabled: true,
        panningEnabled: true,
        userPanningEnabled: true,
        boxSelectionEnabled: false,
        autoungrabify: !document.getElementById("grabbable").checked,
        wheelSensitivity: 0.25
    });
    let nodes = cy.nodes();
    for (let i = 0; i < nodes.length; i++) {
        let tooltip = popperTooltips[i];
        let node = nodes[i];
        let popper = node.popper(tooltip);
        let update = () => {
            popper.update();
        };
        node.on("position", update);
        node.on("select", () => {
            popper.update(true);
        });
        node.on("unselect", () => {
            popper.update(false);
        })
        cy.on("pan zoom resize", update);
    }
}

function upgradesButtonClick(ev) {
    let layout;
    switch (ev.target.id) {
        case "damage_types":
            layout = DAMAGE_TYPES;
            break;
        case "heroes":
            layout = HEROES;
            break;
        case "weapons":
            layout = WEAPONS;
            break;
        case "spells":
            layout = SPELLS;
            break;
        case "dashes":
            layout = DASHES;
            break;
        case "hero_passives":
            layout = HERO_PASSIVES;
            break;
        case "weapon_passives":
            layout = WEAPON_PASSIVES;
            break;
        case "spell_passives":
            layout = SPELL_PASSIVES;
            break;
        case "dash_passives":
            layout = DASH_PASSIVES;
            break;
        default:
            layout = DAMAGE_TYPES.concat(
                HEROES.concat(
                    WEAPONS.concat(
                        SPELLS.concat(
                            DASHES.concat(
                                HERO_PASSIVES.concat(
                                    WEAPON_PASSIVES.concat(
                                        SPELL_PASSIVES.concat(
                                            DASH_PASSIVES
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
    }
    if (layout) {
        generateNodes(layout, document.getElementById("cy"));
        document.getElementById("download").disabled = false;
    }
}

function layoutSelectChanged(ev) {
    if (cy) {
        let layout = cy.layout(LAYOUTS[document.getElementById("layout").selectedIndex]);
        layout.run();
    }
}

function zoomButtonClick(operation) {
    if (cy) {
        let nodes = cy.nodes();
        let position = {
            x: 0,
            y: 0
        };
        for (let node of nodes) {
            let nodePosition = node.position();
            position.x += nodePosition.x;
            position.y += nodePosition.y;
        }
        position.x /= nodes.length;
        position.y /= nodes.length;
        switch (operation) {
            case "-":
                if (cy.zoom() > 0.25) {
                    cy.zoom({
                        level: cy.zoom() - 0.25,
                        position: position
                    });
                }
                break;
            case "1":
                cy.zoom({
                    level: 1,
                    position: position
                });
                break;
            case "+":
                cy.zoom({
                    level: cy.zoom() + 0.25,
                    position: position
                });
        }
    }
}

function grabbableCheckboxChanged(ev) {
    if (cy) {
        if (ev.target.checked) {
            cy.autoungrabify(false);
            cy.nodes().grabify();
        } else {
            cy.autoungrabify(true);
            cy.nodes().ungrabify();
        }
    }
}

function downloadButtonClick() {
    if (!cy) {
        return;
    }
    let canvasList = document.getElementsByTagName("canvas");
    let canvasToSave;
    for (let canvas of canvasList) {
        if (canvas.getAttribute("data-id") === "layer2-node") {
            canvasToSave = canvas;
        }
    }
    if (canvasToSave) {
        let dataURL = canvasToSave.toDataURL();
        let a = document.createElement("a");
        a.href = dataURL;
        a.download = "image.png";
        a.click();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    cytoscape.use(cytoscapeDagre);
    cytoscape.use(cytoscapeKlay);
    cytoscape.use(cytoscapePopper(popperNodeTooltip));
    const buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        if (button.getAttribute("e") === "1") {
            button.addEventListener("click", upgradesButtonClick);
        }
    }
    document.getElementById("layout").addEventListener("change", layoutSelectChanged);
    document.getElementById("minus_zoom").addEventListener("click", () => {
        zoomButtonClick("-");
    });
    document.getElementById("default_zoom").addEventListener("click", () => {
        zoomButtonClick("1");
    });
    document.getElementById("plus_zoom").addEventListener("click", () => {
        zoomButtonClick("+");
    });
    document.getElementById("grabbable").addEventListener("change", grabbableCheckboxChanged);
    document.getElementById("download").addEventListener("click", downloadButtonClick);
});