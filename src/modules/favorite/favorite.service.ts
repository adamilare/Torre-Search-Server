import { Person, PersonEntryType, PersonModel } from './favorite.model';

export async function createPerson(person: Person) {
  const existingFavorite = await PersonModel.findOne({
    ardaId: person.ardaId,
    entryType: person.entryType,
  });
  if (!existingFavorite) {
    return await PersonModel.create(person);
  } else return null;
}

export async function deleteFavoriteById(id: number) {
  await PersonModel.findOneAndDelete({
    ardaId: id,
    entryType: PersonEntryType.LIKE,
  });

  return await allPeople(PersonEntryType.LIKE);
}

export async function allPeople(
  entryType: PersonEntryType,
  limit: number | null = 10,
) {
  let query = PersonModel.find({ entryType: entryType });
  if (limit !== null) {
    query = query.limit(limit);
  }
  return query;
}
