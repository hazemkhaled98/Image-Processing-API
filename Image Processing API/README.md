#Image Processing API  

A simple placeholder API which allows you to place images into the front-end with the size set via URL parameter & can act as a library to serve properly scaled versions of your images to the front-end to reduce page load size.  

The API takes users input through url query on route /api including name, width and height. ex:/api?name=ronaldo.jpg&width=500&height=500.  

first,The API validates the inputs:  
-check if the user entered all the required inputs.  
-Checks if the image is present in the image folder.  
-Checks if the width and height are valid inputs (non-zeroes and non-negative values).  

After validating the inputs,The processing starts using sharp libaray.  
If The image is already processed before, The API sended the cached image otherwise it processes the image and save a cache in the caches folders.  

Finally, The API sends the requested image with width and height set in the url query.  



