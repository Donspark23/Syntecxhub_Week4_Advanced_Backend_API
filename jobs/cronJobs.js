const cron = require("node-cron");
const Log = require("../models/Log");

// Run every day at midnight
cron.schedule("0 0 * * *", async () => {
  console.log("Running cleanup job...");

  try {
    const date = new Date();
    date.setDate(date.getDate() - 7); // 7 days ago

    const result = await Log.deleteMany({
      createdAt: { $lt: date }
    });

    console.log(`Deleted ${result.deletedCount} old logs`);
  } catch (error) {
    console.error(error.message);
  }
});
