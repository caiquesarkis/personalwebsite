const fs = require('fs');
let fm = require('front-matter')
function getFileNames(){
    var fileNames = []
    fs.readdirSync('../Posts/').forEach(file => {
            fileNames.push(file)
        });
    return fileNames
}



function readMarkdown(){
    getFileNames().forEach((file)=>{
        fs.readFile(`../Posts/${file}`, 'utf8' , (err, data) => {
            if (err) {
                console.error(err)
                return
            }
            fs.writeFile(`../Database/${file.replace(".md", "")}.json`, JSON.stringify(
                    {
                    Title:fm(data).attributes.Title,
                    Description:fm(data).attributes.Description,
                    Tags:fm(data).attributes.Tags,
                    Body:fm(data).body,
                    }
                
                ), 'utf8', ()=>{
                console.log(`${file} created successfully`)
            });
            })
    })
    
}

readMarkdown()