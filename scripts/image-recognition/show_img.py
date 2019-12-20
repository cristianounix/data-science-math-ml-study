import cv2
import numpy as np

IMG_PATH = "./images/4.jpg"

if __name__ == "__main__":
	
	# loading the image as a nparray
	img = cv2.imread(img_file_path)

											   # COLOR_BGR2GRAY
	img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB) # converting to RGB

	cv2.imshow("Image: ", img)
	cv2.waitKey(0)
