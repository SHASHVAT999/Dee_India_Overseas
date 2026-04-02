from PIL import Image
import os
import glob

# paths
input_dir = r"C:\Users\SMART\.gemini\antigravity\brain\f04bcf8e-eb75-45f7-8991-f6ed8b66da1e"
output_dir = r"d:\Projects\dee_india\public\images\hero_3d"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

files = glob.glob(os.path.join(input_dir, "*_17*.png"))

for file_path in files:
    try:
        img = Image.open(file_path).convert("RGBA")
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # Check if pixel is white or very close to white (for anti-aliasing edges we might need fuzz)
            # DALL-E white is usually strict 255. Let's use >240 threshold.
            # Convert to transparent preserving color if we want, or simple cut out.
            if item[0] > 240 and item[1] > 240 and item[2] > 240:
                newData.append((255, 255, 255, 0)) # fully transparent
            else:
                newData.append(item)
                
        img.putdata(newData)
        
        # determine filename
        base = os.path.basename(file_path)
        # remove the timestamp part _177...
        name_parts = base.split('_17')
        new_name = name_parts[0] + ".png"
        
        target_path = os.path.join(output_dir, new_name)
        img.save(target_path, "PNG")
        print(f"Saved transparent image to {target_path}")
    except Exception as e:
        print(f"Failed to process {file_path}: {e}")
