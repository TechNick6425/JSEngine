JSEngine
========

JSEngine is a dynamic library loader written in PHP. It contains a large library of scripts to use. Included libraries include below.

Name       | Uses
---------- | ----------------------------
gl         | Used for initialized WebGL.
input      | Functions for keyboard input.

Users can submit their own libraries with a pull request with the library in the lib folder.

Installing
==========

###From repo

1. Download the repository.
2. Delete the "lib" folder.
3. Put "index.php" and "loader.php" in the root of your server.

###By hand

#####WARNING I take no responsibility if this method fails, as this method breaking is entirely the fault of the user.

1. Download "loader.php"
2. Put it in the folder of your app.
3. Paste this into the header of your HTML document.

'''
<?php include('loader.php'); ?>
'''

4. Load libraries by using '<?php js_include(name); ?>' and replacing "name" with the name of the library.