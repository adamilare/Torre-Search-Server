import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import { DocumentType, IModelOptions } from '@typegoose/typegoose/lib/types';

const schemaOptions: IModelOptions = {
  schemaOptions: {
    toJSON: {
      versionKey: false,
      transform: function (doc: DocumentType<RecentSearch>, ret: any) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  },
};

@modelOptions(schemaOptions)
export class RecentSearch {
  @prop({ required: true })
  public searchString!: string;
}

export const RecentSearchModel = getModelForClass(RecentSearch, {
  schemaOptions: { timestamps: true },
});

RecentSearchModel.schema.index({ searchString: 'text' });
