setInterval(()=>{
  $.get("https://blax.xotic.org/api/open/", "crate=add", ()=>{console.log("added 25k")})
}, 500)
