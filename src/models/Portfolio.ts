// models/Portfolio.ts
import mongoose, { Schema, models } from 'mongoose';

const PortfolioSchema = new Schema({
  title: String,
  description: String,
  createdAt: { type: Date, default: Date.now },
});

const Portfolio = models.Portfolio || mongoose.model('Portfolio', PortfolioSchema);

export default Portfolio;
