const express = require('express');
const postRoutes = require('./routes/post.routes');
const uploadRoutes = require('./routes/upload.routes');
const downloadRoutes = require('./routes/download.routes');
const cors = require('cors')
const app = express();
const PORT = 3000;

app.use(express.json());
// enable cors for all requests
app.use(cors());
app.use('/posts', postRoutes);
app.use('/upload', uploadRoutes);
app.use('/download', downloadRoutes);

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`server running on http://localhost:${PORT}`);
    }
});
