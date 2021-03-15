import { StandardDataSource, StandardDataType } from 'pont-engine';

export default function (dataSource: StandardDataSource): StandardDataSource {
  dataSource.mods.forEach(mod => {
    mod.interfaces.forEach(inter => {
      if (
        inter.response.typeName === 'ResultObject' ||
        inter.response.typeName === 'UnifiedReturnObject' ||
        inter.response.typeName === 'UnitedReturnObjects' ||
        inter.response.typeName === 'ResultPackaging' ||
        inter.response.typeName === 'Result' ||
        inter.response.typeName === 'ResObject'
      ) {
        if (inter.response.typeArgs && inter.response.typeArgs[0]) {
          inter.response = inter.response.typeArgs[0];

          if (inter.response && inter.response.typeName === 'date-time') {
            inter.response.typeName = 'string';
          }
        } else {
          inter.response = new StandardDataType([]);
          inter.response.getInitialValue = inter.response.getInitialValue.bind(this,false);
        }
      }
    });
  });

  return dataSource;
}