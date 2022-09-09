// This will help us connect to the database
const express = require("express");
const fs = require("fs");
const byline = require("byline");
const Data = require("../model/dataModel");

exports.handleUploadData = async function (req, res) {
    //getting the filename
    const fileName = req.file.filename;

    //reading the file 
    const stream = byline(fs.createReadStream(`./uploads/${fileName}`));
    let index = 0;
    let headers;
    let data = [];

    stream.on("data", function (line) {
        let currentData;
        let entryObj;
        let i;

        line = line.toString(); // Convert the buffer stream to a string line
        if (index === 0) {
            headers = line.split(/[ ]+/); //getting the first line as header
        } else {
            currentData = line.split(/[ ]+/); //other lines as data
            entryObj = {};
            for (i = 0; i < headers.length; i++) {
                entryObj[headers[i]] = currentData[i];
            }
            data.push(entryObj);
        }
        index++;
    });
    stream.on("error", function (err) {
        console.log(err);
    });
    stream.on("end", function () {
        const allData = data;
        //formatting all the data to the desired types mentioned in data model
        const filteredAllData = allData.map((singleData) => {
            const keys = Object.keys(singleData);
            keys.forEach((key) => {
                if (key === "entry") {
                    singleData[key] = Number(singleData[key]); //transforming to Integer
                } else if (key === "exit") {
                    singleData[key] = Number(singleData[key]); //transforming to Integer
                } else {
                    const date = new Date(singleData[key])
                    singleData[key] = {
                        year:Number(date.getFullYear()),
                        month:Number(date.getMonth()),
                        day:Number(date.getDay()),
                        hour:Number(date.getHours())
                    }; //transforming required format
                }
            });
            return singleData;
        });
        //inserting data to data base
        Data.insertMany(filteredAllData)
            .then(function (result) {
                console.log("Data inserted"); // Success
                //removing file after the data is inserted to database
                fs.unlinkSync(`./uploads/${fileName}`);
                //response
                res.json({ msg: "success", result });
            })
            .catch(function (error) {
                console.log(error); // Failure
            });
        
    });
};
