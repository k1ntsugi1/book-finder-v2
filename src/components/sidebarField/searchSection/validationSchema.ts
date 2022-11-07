import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  currentNameOfItem: Yup.string().test({
    name: 'strangeName',
    message: 'have to name',
    test: (value, testContext) => {
      const nameOfItem = testContext.parent.currentNameOfItem ?? null;
      return !(nameOfItem === null || nameOfItem.trim() === '');
    }
  })
});

export default validationSchema;
