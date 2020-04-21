import cv2

PATH_TO_CASCADE_XML = '../opencv/data/haarcascades/haarcascade_frontalcatface.xml'
IMG_PATH = '../images/3.jpg'

# Load Algorithm
loadAlgorithm = cv2.CascadeClassifier(PATH_TO_CASCADE_XML)

# Load image
image = cv2.imread(IMG_PATH)

# Convert image to gray scale
imageGray = cv2.cvtColor(image, cv2.COLOR_RGB2GRAY)

faces = loadAlgorithm.detectMultiScale(imageGray, scaleFactor=1.02, minNeighbors=3, minSize=(35, 35))

print(faces)

for(x, y, width, height) in faces:
    cv2.rectangle(image, (x, y), (x + width, y+height), (255, 0, 255), 2)


cv2.imshow("Faces", image)


cv2.waitKey()
