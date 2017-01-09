'use strcit';

const fs = require('fs');
const nodemailer = require('nodemailer');

let sendEmail = (task) => {
    let html = fs.readFileSync(`./dest/${task}/index.html`, 'utf-8');

    let mailList = [
        // 'xunjx@shuzilm.cn',
        // 'songguang@shuzilm.cn',
        // 'liupy@shuzilm.cn',
        // 'panxq@shuzilm.cn'
        // 'pan_cathy@163.com'
    ];

    let data = require(`./src/${task}/data.json`);
    let mailOptions = {
        from: '1350522246@qq.com',
        to: mailList.join(', '),
        subject: data.title,
        html: html
    };

    nodemailer
        .createTransport('smtps://1350522246%40qq.com:ehhhwzvzzscmhiig@smtp.qq.com')
        .sendMail(mailOptions, (error, info) => {
            if (error) return console.log(error);
            console.log(info);
        })
}

let task = process.argv.slice(2)[0];

try {
    sendEmail(task);
} catch (error) {
    if (error.errno === -2) 
        console.log(`Error: ${task} is a invalid task name, please check up and alter.`);

    console.log(error);
}