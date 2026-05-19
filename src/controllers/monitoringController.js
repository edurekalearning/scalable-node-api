function getPerformanceStatus(req, res) {
  const memoryUsage = process.memoryUsage();

  res.status(200).json({
    success: true,
    message: "Application performance status fetched successfully",
    data: {
      uptime: `${Math.round(process.uptime())} seconds`,
      memory: {
        rss: `${Math.round(memoryUsage.rss / 1024 / 1024)} MB`,
        heapTotal: `${Math.round(memoryUsage.heapTotal / 1024 / 1024)} MB`,
        heapUsed: `${Math.round(memoryUsage.heapUsed / 1024 / 1024)} MB`
      },
      environment: process.env.NODE_ENV || "development"
    }
  });
}

module.exports = {
  getPerformanceStatus
};
