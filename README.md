 
 In browse Page:
        movie container
                -video background
                -video title,buttons
            secondary container
                    -movie lists
                        .popular ;trending;Now Playing
                           -movie cards *n
//Creating routing authentication
1)Header
2)rounting
3)login page browse page
4) firebase initialization
5)firebase hosting
6)firebase authentication-crating user(signup);login user(signin)
7)onauthentication changed
    -dispatch user deatils to redux store
    -if user logins or signup redirect to browse page
    -else no redirection or be in the same page
8)in browse page create signout
9)if signout=>redirect to login page
//developing main page
10)create main container
   -fetch nowplaying videos from tmdb 
    -dispatch videos to redux store
         -video background (receive movieid as props)
             - get 1st video from store 
             -embed iframe
             -create custom hook and pass movie id
         
        -videotitle(title,description as props)
          -absoulte 
          -play and info buttons
          -title description
-Secondary container
    -Movie list
        -movie cards*n
        -tmdb image cdn
        -usepopular;usetoprated;useUpcoming custom hooks
    


GPT SEARCH
  -gpt search button
  -create gpt slice
  -initially showgpt false;toggle action
  -handletoggle(dispatch)
  -if toggle then gpt search container
       -gpt search bar
       -multi launguage feauture ;langslice
    -integrate gpt api
    genereae openai key(platform.openapi.key)