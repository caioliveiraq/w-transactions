import Vue from 'vue'
import { Wrapper, shallowMount } from '@vue/test-utils'
import { Transaction } from "@/types/Transaction";
import Transactions from '@/components/organisms/Transactions.vue'
import Modal from '@/components/molecules/Modal.vue'
import Filters from '@/components/molecules/Filters.vue'
import DataSheet from '@/components/molecules/DataSheet.vue'

describe('Modal Tests', () => {

  it('Should render modal title', async () => {
    const wrapper: Wrapper<Vue> = shallowMountComponent()
    wrapper.vm.$data.showModal = true;
    await wrapper.vm.$nextTick()
    expect(wrapper.find('#modal-title').text()).toEqual('Resgate')
  })

  it('Should render modal progressBar', async () => {
    const wrapper: Wrapper<Vue> = shallowMountComponent()
    wrapper.vm.$data.showModal = true;
    await wrapper.vm.$nextTick()
    expect(wrapper.find('#progress-bar')).toBeTruthy()
  })

  it('Should render modal process', async () => {
    const wrapper: Wrapper<Vue> = shallowMountComponent()
    wrapper.vm.$data.showModal = true;
    await wrapper.vm.$nextTick()
    const process = wrapper.findAll('.process')

    expect(process.at(0).find('.process__title').text()).toEqual('Tranferido de')
    expect(process.at(0).find('.process__description').text()).toEqual('Aposentadoria R$ 2078.66')
    expect(process.at(1).find('.process__title').text()).toEqual('Para')
    expect(process.at(1).find('.process__description').text()).toEqual('Conta Warren R$ 2078.66')
  })
})

describe('DataSheet Tests', () => {

  it('Should render data rows', async () => {
    const wrapper: Wrapper<Vue> = shallowMountComponent()
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('.row').length).toEqual(2)
  })

  it('Should render data columns', async () => {
    const wrapper: Wrapper<Vue> = shallowMountComponent()
    const row = wrapper.findAll('.row').at(0)
    await wrapper.vm.$nextTick()
    expect(row.findAll('div').length).toEqual(5)
  })
})

describe('Filters Tests', () => {

  it('Should render filters', async () => {
    const wrapper: Wrapper<Vue> = shallowMountComponent()
    await wrapper.vm.$nextTick()
    expect(wrapper.find('#title')).toBeTruthy()
    expect(wrapper.find('#status')).toBeTruthy()
  })
})

function getTransaction(): Transaction {
  return {
    id: "5f89f9f257fe42957bf6dbfd",
    title: "Resgate",
    description: "et labore proident aute nulla",
    status: "processing",
    amount: 2078.66,
    date: "2018-12-22",
    from: "Aposentadoria",
    to: "Conta Warren",
  }
}

function getTransactions(): Transaction[] {
  return [
    {
      id: "5f89f9f257fe42957bf6dbfd",
      title: "Resgate",
      description: "et labore proident aute nulla",
      status: "created",
      amount: 2078.66,
      date: "2018-12-22",
      from: "Aposentadoria",
      to: "Conta Warren",
    },
    {
      id: "5f89f9f257fe42957bf6db31",
      title: "Analise",
      description: "et labore proident aute nulla",
      status: "processing",
      amount: 2078.66,
      date: "2018-12-22",
      from: "Aposentadoria",
      to: "Conta Warren",
    }
  ]
}

function shallowMountComponent(): Wrapper<Vue>{
  return shallowMount(Transactions, {
    data() {
      return {
        transactionsData: getTransactions(),
        transactionPicked: getTransaction(),
        transactionsFilter: getTransactions()
      }
    },

    stubs: {
      Modal,
      Filters,
      DataSheet
    }
  })
}
