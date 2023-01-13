const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const MyModel = require('./Schema');

const DB = "mongodb+srv://BoopathiHari:boopathi007@cluster0.blxf888.mongodb.net/?retryWrites=true&w=majority";

mongoose.set('strictQuery', true);

mongoose.connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false
}).then(() => {
    console.log('Connection succesfully');
}).catch((err) => {
    console.log('no connection ');
})

app.use(express.json());



// This api is used to store the GS and JS fields
app.post('/store', (req, res) => {
    const myData = new MyModel(req.body);
    myData.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            console.log(err);
            res.status(400).send("unable to save to database");
        });
});


// This api is used to get the count of GS
app.get('/groupbyGeneral', (req, res) => {
    MyModel.aggregate([
        {
            $group: {
                _id: "$GeneralSec",
                count: { $sum: 1 }
            }
            
        },
        {
            $sort: { count: -1 }
        }
    ])
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
            res.status(400).send({ error: "Unable to group data" });
        });
});


// This api is used to get the count of JS
app.get('/groupbyJoinSec', (req, res) => {
    MyModel.aggregate([
        {
            $group: {
                _id: "$JoinSec",
                count: { $sum: 1 }
            }
        },
        {
            $sort: { count: -1 }
        }
    ])
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
            res.status(400).send({ error: "Unable to group data" });
        });
});




app.listen(3000, () => {
    console.log('Server listening on port 3000');
});