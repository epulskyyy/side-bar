import moxios from 'moxios';
import { testStore } from '../utils/funcTest';
import { fetchChartInvoice } from '../store/modules/invoice/actions';

describe('fetchChartInvoice', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test('Store is update correctly', () => {
    const expectedState = {
      status: 'OK',
      responseCode: '200',
      description: 'Successfully',
      success_rate: 0,
      total_invoice: 50000000,
      total_saldo: 100000000,
      total_mutasi: 300000000,
      total_lokasi_kantor: 300000000,
      total_valas: 300000000,
      total_number_of_hit: 3,
      data: [
        {
          date: 'Apr-2020',
          total_hit: 1,
          total: 27500000,
        },
        {
          date: 'May-2020',
          total_hit: 1,
          total: 67500000,
        },
      ],
    };

    const store = testStore();

    return store.dispatch(fetchChartInvoice()).then(() => {
      const newState = store.getState();
      expect(newState.invoice.dataChartInvoice).toEqual(expectedState);
    });
  });
});
