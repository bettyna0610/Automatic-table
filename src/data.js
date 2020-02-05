import React from 'react'


export let offers = {};

let dd = new Date();
for (var i=0; i< 10; i++)
{
offers[i] = {"id":i, "date": new Date(dd.setMinutes(dd.getMinutes() + i*10)), "amount": Math.random()*10,
"bid": 9.5 + Math.random()};


}



