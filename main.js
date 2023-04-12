var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://us.123rf.com/450wm/colorfuelstudio/colorfuelstudio2109/colorfuelstudio210900049/174534985-young-woman-whisper-secret-with-cute-little-boy.jpg?ver=6", "https://www.shutterstock.com/image-vector/happy-cute-kid-boy-smile-260nw-1598978041.jpg" , "https://www.shutterstock.com/image-vector/cute-kid-teen-girl-show-260nw-1524991379.jpg", "https://www.shutterstock.com/image-vector/little-girl-show-agreement-thumb-260nw-1903208254.jpg", "https://www.shutterstock.com/image-vector/cute-kid-teen-boy-show-260nw-1509139523.jpg"];
var names = ["Famly Book","Mom and Youngest Son (Jacob)", "Dad and Middle Son (Tommy)", "Oldest Daughter (Grace)", "Middle Daughter (Ayla)", "Oldest Son (Luke)"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
