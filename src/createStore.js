export function createStore(rootReducer, initialState) {
  //rootReducer это функция получаемая извне, initialstate - начальное состояние, которое передается в рутредюссер
  let state = rootReducer(initialState, { type: '__INIT__' });
  // задается начальное состояние, проИнициализируем стейт, в качестве экшн передаем просто системный объект, чтобы запустить наш стейт
  const subscribers = [];
  return {
    //action === {type:'INCREMENT'} экшн по сути равен обыному объекту в котором есть свойство type (типипзированный объект) в котором указывается некая строка //допустим инкремент. Диспатчить экшн значит отправлять его. КОгда прилетает экшн - мы должны изменить наш стейт и сделать это мы должны через редюссер. /////Откуда берется редюссер? ведь для каждого приложения он должен быть свой, мы его получаем как параметр в фунцию createstore
    dispatch(action) {
      //говорит, что нужно что-то изменить, что-то поменялось или произошло
      state = rootReducer(state, action); //функция, которую мы можем вызвать, туда мы передаем наш объект, мы таким образом меняем стейт на новое состояние.
      //ДАЛЕЕ НУЖНО УВЕДОМИТЬ ВСЕХ НАШИХ СЛУШАТЕЛЕЙ, ЧТО СОСТОЯНИЕ ИЗМЕНИЛОСЬ
      subscribers.forEach((sub) => sub()); //пробегаемся по этому массиву и каждый элемент этого массива это фунция, которую мы можем вызвать
    },
    subscribe(callback) {
      // все слушатели, которые слушают этот объект должны что-то поменять
      subscribers.push(callback); // мы добавляем в конец колбек и ничего с ним не делаем
    }, // callback функция выполняется только тогда, когда что-то произойдет
    getState() {
      return state;
    },
  };
}
