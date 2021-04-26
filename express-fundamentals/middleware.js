const accessControl = (req,res,next) => {
  const access=true;
  if(!access){
    res.json({
      success: false,
      message: "you are not authorized"
    })
    console.log("middleware a");
  }  
  next();
};

module.exports = {
  accessControl
}