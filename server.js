const express = require('express');
const app = express();
const PORT = 8080;

app.get('/api/status', (req, res) => {
    res.json({
        status: "Operational",
        environment: "AWS EKS",
        timestamp: new Date(),
        message: "Hello from the Kubernetes Backend!"
    });
});

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
