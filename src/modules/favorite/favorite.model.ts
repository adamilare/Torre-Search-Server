import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import { DocumentType, IModelOptions } from '@typegoose/typegoose/lib/types';

export enum PersonEntryType {
  LIKE = 1,
  RECENT_SEARCH = 2,
}

const schemaOptions: IModelOptions = {
  schemaOptions: {
    toJSON: {
      versionKey: false,
      transform: function (doc: DocumentType<Person>, ret: any) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  },
};

@modelOptions(schemaOptions)
export class Person {
  @prop({ required: true })
  ardaId!: number;
  @prop({ required: true })
  name!: string;
  @prop()
  professionalHeadline!: string;
  @prop({ required: true })
  username!: string;
  @prop()
  imageUrl!: string;
  @prop({ required: true, enum: PersonEntryType })
  entryType!: PersonEntryType;
}

export const PersonModel = getModelForClass(Person, {
  schemaOptions: { timestamps: true },
});
