export interface woData {
  key: string;
  field: string;
  content: string;
}

export const emptyWO: woData[] = [
  { key: 'workOrder', field: 'Work Order', content: 'Empty' },
  { key: 'itemNumber', field: 'Item Number', content: 'Empty' },
  { key: 'image', field: 'Image', content: 'empty.png' },
  { key: 'qty', field: 'Quantity', content: '0' },
  { key: 'unitWeightLb', field: 'Unit Weight (lb)', content: '0.000 lb' },
  { key: 'unitWeightGr', field: 'Unit Weight (gr)', content: '0.00 gr' },
  { key: 'weightRange', field: 'Weight Range', content: '0.00 - 0.00 gr' }
];

export const dummyWO: woData[] = [
  { key: 'workOrder', field: 'Work Order', content: '37819073' },
  { key: 'itemNumber', field: 'Item Number', content: 'SERIES-210G*30493020' },
  { key: 'image', field: 'Image', content: 'asco-8214g010-12-dc.jpg' },
  { key: 'qty', field: 'Quantity', content: '2' },
  { key: 'unitWeightLb', field: 'Unit Weight (lb)', content: '1.217 lb' },
  { key: 'unitWeightGr', field: 'Unit Weight (gr)', content: '552.00 gr' },
  { key: 'weightRange', field: 'Weight Range', content: '542.00 - 552.00 gr' }
];

///

export interface woHttpData {
  workOrder: string;
  itemNumber: string;
  image: string;
  qty: number;
  //
  unitWeightLb: number;
  unitUpperLimitLb: number;
  unitLowerLimitLb: number;
  //
  unitWeightGr: number;
  unitUpperLimitGr: number;
  unitLowerLimitGr: number;
}

export const emptyHttpWO: woHttpData = {
  workOrder: 'Empty',
  itemNumber: 'Empty',
  image: 'empty.png',
  qty: 0,
  //
  unitWeightLb: 0.0,
  unitLowerLimitLb: 0.0,
  unitUpperLimitLb: 0.0,
  //
  unitWeightGr: 0.0,
  unitLowerLimitGr: 0.0,
  unitUpperLimitGr: 0.0
};

export const dummyHttpWO: woHttpData = {
  workOrder: '37819073',
  itemNumber: 'SERIES-210G*30493020',
  image: 'asco-8214g010-12-dc.jpg',
  qty: 2,
  //
  unitWeightLb: 1.217,
  unitLowerLimitLb: 1.195,
  unitUpperLimitLb: 1.239,
  //
  unitWeightGr: 552.0,
  unitLowerLimitGr: 562.0,
  unitUpperLimitGr: 542.0
};
