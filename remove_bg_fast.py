from PIL import Image
import sys

def remove_background(input_path, output_path, tolerance=15):
    try:
        img = Image.open(input_path).convert("RGBA")
        pixels = img.load()
        width, height = img.size
        
        # We assume the top-left pixel is the background color.
        bg_r, bg_g, bg_b, _ = pixels[0, 0]
        
        # Simple flood fill or iterative replacement
        # Actually since the images are isolated on white, we can just turn all pixels close to bg color to transparent.
        for y in range(height):
            for x in range(width):
                r, g, b, a = pixels[x, y]
                # Check distance from bg color
                if abs(r - bg_r) <= tolerance and abs(g - bg_g) <= tolerance and abs(b - bg_b) <= tolerance:
                    # Make it transparent
                    pixels[x, y] = (r, g, b, 0)
        
        img.save(output_path, "PNG")
        print(f"Saved {output_path}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

images = [
    ("d:\\Projects\\dee_india\\public\\images\\hero_3d\\3d_mercedes_truck.png", "d:\\Projects\\dee_india\\public\\images\\hero_3d\\3d_mercedes_truck_trans.png"),
    ("d:\\Projects\\dee_india\\public\\images\\hero_3d\\3d_auto_rickshaw.png", "d:\\Projects\\dee_india\\public\\images\\hero_3d\\3d_auto_rickshaw_trans.png"),
    ("d:\\Projects\\dee_india\\public\\images\\hero_3d\\3d_sports_motorcycle.png", "d:\\Projects\\dee_india\\public\\images\\hero_3d\\3d_sports_motorcycle_trans.png"),
    ("d:\\Projects\\dee_india\\public\\images\\hero_3d\\3d_motor_scooter.png", "d:\\Projects\\dee_india\\public\\images\\hero_3d\\3d_motor_scooter_trans.png")
]

for in_path, out_path in images:
    remove_background(in_path, out_path)
