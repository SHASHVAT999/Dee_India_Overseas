const fs = require("fs");
const d3 = require("d3-geo");
const topojson = require("topojson-client");

async function generate() {
    console.log("Fetching world atlas data...");
    const res = await fetch("https://unpkg.com/world-atlas@2.0.2/countries-110m.json");
    const world = await res.json();

    // Get the land feature
    const land = topojson.feature(world, world.objects.land);

    // Width and height of our mapping area
    const width = 800;
    const height = 400;

    console.log("Projecting map onto grid...");
    // Create an EqualEarth projection scaled to fit the 800x400 box
    const projection = d3.geoEqualEarth()
        .fitSize([width, height], land);

    const dots = [];
    const GRID_SIZE = 8; // spacing between dots

    for (let x = 0; x < width; x += GRID_SIZE) {
        for (let y = 0; y < height; y += GRID_SIZE) {
            const coords = projection.invert([x + GRID_SIZE / 2, y + GRID_SIZE / 2]);
            if (coords && d3.geoContains(land, coords)) {
                // coords[0] is Longitude, coords[1] is Latitude
                const lat = coords[1];

                // Exclude Antarctica (below -55 deg) and extreme Arctic regions (above 75 deg)
                if (lat > -55 && lat < 75) {
                    // Round to 1 decimal place to save space
                    dots.push([
                        Math.round(x * 10) / 10,
                        Math.round(y * 10) / 10
                    ]);
                }
            }
        }
    }

    // Ensure nested directories exist if needed, though src/data should
    fs.writeFileSync("src/data/map-dots.json", JSON.stringify(dots));
    console.log(`Success! Generated map-dots.json with ${dots.length} dots.`);
}

generate().catch(console.error);
