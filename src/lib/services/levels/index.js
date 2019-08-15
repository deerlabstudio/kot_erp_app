import LevelsServices from './service';
import { transformListLevels } from './transform';

export async function getLevelsList() {
  try {
    const levelsServices = new LevelsServices();
    const levelsList = await levelsServices.getLevels();
    return transformListLevels(levelsList);
  } catch (error) {
    throw error;
  }
}

export async function saveLevels(data) {
  try {
    const levelsServices = new LevelsServices();
    const level = await levelsServices.storeLevels(data);
    return level;
  } catch (error) {
    throw error;
  }
}

export async function updateLevels(id, data) {
  try {
    const levelsServices = new LevelsServices();
    const level = await levelsServices.updateLevels(id, data);
    return level;
  } catch (error) {
    throw error;
  }
}

export async function deleteLevels(id) {
  try {
    const levelsServices = new LevelsServices();
    const level = await levelsServices.deleteLevels(id);
    return level;
  } catch (error) {
    throw error;
  }
}
