import { Image, ImageBackground} from "@gluestack-ui/themed";
import React from 'react';

const Background_Login = () => {
    return <Image 
        w={"100%"} 
        h={"100%"} 
        alt="background"
        source ={
        require ("../../assets/backgroundLogin.gif")
        } 
        position="absolute"
        opacity={0.5}

        />  

};
export default Background_Login;