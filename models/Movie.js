import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'por favor ingrese el título'],
  },
  plot: {
    type: String,
    required: [true, 'por favor ingrese el plot'],
  },
});

export default mongoose.models.Movie || mongoose.model('Movie', MovieSchema);
