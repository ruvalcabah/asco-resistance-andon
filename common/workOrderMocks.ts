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
  { key: 'resistance', field: 'Resistance (Ohm)', content: '0.00 - 0.00 ohm' },
  { key: 'turns', field: 'Turns Count', content: '0 - 0' }
];

export const dummyWO: woData[] = [
  { key: 'workOrder', field: 'Work Order', content: '47129917' },
  { key: 'itemNumber', field: 'Item Number', content: '238610-032-D' },
  { key: 'image', field: 'Image', content: 'asco-8214g010-12-dc.jpg' },
  { key: 'qty', field: 'Quantity', content: '480' },
  { key: 'resistance', field: 'Resistance (Ohm)', content: '85.5 - 104.5 ohm' },
  { key: 'turns', field: 'Turns Count', content: '2779 - 2828' }
];

///

export interface woHttpData {
  workOrder: string;
  itemNumber: string;
  image: string;
  qty: number;
  //
  resistance: number;
  resUpper: number;
  resLower: number;
  //
  turns: number;
  turnsUpper: number;
  turnsLower: number;
  //
  shortText: string;
}

export const emptyHttpWO: woHttpData = {
  workOrder: 'Empty',
  itemNumber: 'Empty',
  image: 'empty.png',
  qty: 0,
  //
  resistance: 0.0,
  resUpper: 0.0,
  resLower: 0.0,
  //
  turns: 0,
  turnsUpper: 0,
  turnsLower: 0,
  //
  shortText: 'Empty'
};

export const dummyHttpWO: woHttpData = {
  workOrder: '47946002',
  itemNumber: '238610-032-D',
  image: 'asco-8214g010-12-dc.jpg',
  qty: 480,
  //
  resistance: 95.0,
  resUpper: 104.5,
  resLower: 85.5,
  //
  turns: 2800,
  turnsUpper: 2828,
  turnsLower: 2779,
  //
  shortText: `APVL: MP-C-080
PRODUCT NUMBER: 238610-032-D
VOLTS: 120/60, 110/50 FT
ADD. MARKINGS: ASCO, RU, CE, 30
INSPECTION OF COILS PER MP-I-006
RES. OHMS (+/- 10% AT 20 C)
NOMINAL: 95.0, UPPER: 104.5, LOWER: 85.5
NUMBER OF TURNS (+1% -3/4%)
NOMINAL: 2800, UPPER: 2828, LOWER: 2779

`
  // <!-- Empty     -->Empty
  // <!-- Empty     -->APVL: MP-C-080
  // <!-- Empty     -->PRODUCT NUMBER: 238610-032-D
  // <!-- Empty     -->VOLTS: 120/60, 110/50 FT
  // <!-- Empty     -->ADD. MARKINGS: ASCO, RU, CE, 30
  // <!-- Empty     -->INSPECTION OF COILS PER MP-I-006
  // <!-- Empty     -->RES. OHMS (+/- 10% AT 20 C)
  // <!-- Empty     -->NOMINAL: 95.0, UPPER: 104.5, LOWER: 85.5
  // <!-- Empty     -->NUMBER OF TURNS (+1% -3/4%)
  // <!-- Empty     -->NOMINAL: 2800, UPPER: 2828, LOWER: 2779
};
