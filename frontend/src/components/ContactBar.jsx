import React, { useState } from "react";
import { FacebookIcon, InstagramIcon, MessageCircle } from "lucide-react";

const ContactBar = () => {
  const [facebookColor, setFacebookColor] = useState("#232323");
  const [instagramColor, setInstagramColor] = useState("#232323");
  const [whatsappColor, setWhatsappColor] = useState("#232323");
  return (
    <>
      <div className="bg-[#F8F8F8] w-full h-10 mt-3 px-3 md:px-10 flex justify-between items-center">
        <div className="flex h-full items-center gap-1 md:gap-5">
          <FacebookIcon
            size={18}
            fill={facebookColor}
            strokeWidth={0.1}
            onMouseOver={() => setFacebookColor("blue")}
            onMouseOut={() => setFacebookColor("#232323")}
          />
          <InstagramIcon
            size={18}
            color={instagramColor}
            onMouseOver={() => setInstagramColor("#FF495F")}
            onMouseOut={() => setInstagramColor("#232323")}
          />
          <MessageCircle
            size={18}
            fill={whatsappColor}
            strokeWidth={0.1}
            onMouseOver={() => setWhatsappColor("#1EFF78")}
            onMouseOut={() => setWhatsappColor("#232323")}
          />
        </div>
        <div>
          <span className="font-medium">
            Call us:
            <span className="ml-1">+92XXXXXXXXX</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default ContactBar;
