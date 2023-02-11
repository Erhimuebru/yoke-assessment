import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongodb';

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
  @Prop()
  title: String;

  @Prop()
  image: String;

  @Prop()
  id: String;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
