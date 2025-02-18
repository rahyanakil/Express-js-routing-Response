//url params(url parameter)
export const demo1 =async(req,res)=>{
let name =req.params.name;
let age =req.params.age;
return res.json({name:name,age:age});
}

//query string
// http://localhost:5050/api/demo2?name=Rahyan&age=34
export const demo2 = async(req,res)=>{

let name =req.query.name;
let age = req.query.age;
return res.json({name:name,age:age});
}

//how to work with request body json
export const demo3 = async(req,res)=>{
let JSONBody = req.body
return res.json(JSONBody);
}

//how to work with request form data file
export const demo4 = async(req,res)=>{
    let FormDataBody =req.body
    return res.json(FormDataBody)

}

//request header properties
export const demo5 = async(req,res)=>{
 let reqHeader =req.headers;
 return res.json(reqHeader)
}

//how to work with middle wire
export const demo6 =async(req,res)=>{
    return res.json()
}