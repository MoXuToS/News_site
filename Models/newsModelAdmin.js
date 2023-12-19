const connection = require("../mysql.js");


exports.getAll = async function (req,res){
    let arr=[];
    await connection.query("SELECT * FROM news")
    .then(data=> {
        for (let i=0;i<data[0].length;i++)
        {
            arr[i]=data[0][i];
        }
    })
    .catch(err =>{ 
        console.log(err);
    });
    return arr;
};

exports.getOne = async function (req,res){ 
    let arr=[];
    let sql="select * from news where idnews=?";
    filter=[req];
    await connection.query(sql,filter)
    .then(data=> {
        for (let i=0;i<data[0].length;i++)
        {
            arr[i]=data[0][i];
        }
    })
    .catch(err =>{
        console.log(err);
    });
    return arr;
}
exports.addOne = async function (req,res){

    let sql="insert into news values('',?,?,?)";
    filter=[req.titlenews, req.textnews, req.descriptionnews];
    await connection.query(sql,filter)
    .then(data=> {
    })
    .catch(err =>{
        console.log(err);
    });
} 
exports.editOne = async function (req,res){
    let arr=[];
    let sql="update news set titlenews=?, textnews=?, descriptionnews=? where idnews=?"; 
    filter=[req.titlenews, req.textnews, req.descriptionnews,+req.idnews]; 
    await connection.query(sql,filter)
    .then(data=> {
        for (let i=0;i<data[0].length;i++)
        {
            arr[i]=data[0][i];
        }
    }) 
    .catch(err =>{ 
        console.log("ERROR"+err); 
    });
    return arr;
}
exports.deleteOne = async function (req,res){
    console.log("model del");
    console.log(req)
    let sql="delete from news where idnews=?";
    filter=[req]; 
    await connection.query(sql,filter) 
    .then(response=> {
        console.log("ok");
    })
    .catch(err =>{
        console.log(err);
    });
}