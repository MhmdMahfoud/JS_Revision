async function getdata() {
  let data = [];
  if (data.length > 0) {
    return "fund";
  } else {
    throw new Error("no");
  }


}

getdata().then((good)=>{console.log(good)},
(bad)=>{console.log("na")}

);
// console.log(getdata());
