const express = require('express');
const app = express();
const port = 8000;

const main_page = `
<!DOCTYPE html>
<html lang = "ko">
    <head>
        <meta charset = "utf-8">
        <title>UPBIT_CHRONOLOGY</title>
        <link rel = "stylesheet" href = "/style.css"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
        <link href="https://fonts.googleapis.com/css2?family=Dongle:wght@700&display=swap" rel="stylesheet">
    </head>
    <body>
        <div class = "all_container">
            <div class = "logo_container">
                <img src ="" width = "400px" height = "80px">
            </div>
            <div class = "main_container">
                <div class = "start_bt_container" onclick = "window.open('second_page.html')">
                    <div class="button_base b07_3d_double_roll">
                        <div>시작</div>
                        <div>시작</div>
                        <div>시작</div>
                        <div>시작</div>
                    </div>
                </div>
                <div class = "help_bt_container">
                    <div class="button_base b07_3d_double_roll">
                        <div>도움말</div>
                        <div>도움말</div>
                        <div>도움말</div>
                        <div>도움말</div>
                    </div>
            
                <div class = "end_bt_container">        
                    <div class="button_base b07_3d_double_roll" onclick = "window.close()">
                        <div>종료</div>
                        <div>종료</div>
                        <div>종료</div>
                        <div>종료</div>
                    </div>
                </div>
            </div>
        </div>
        <script type = "text/javascript" src = "script.js"></script>
    </body>
</html>
`;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(main_page);
});

app.listen(port, () => {
    console.log('server_start');
});