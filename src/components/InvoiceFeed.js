import React, { Component } from 'react';
import '../stylesheets/InvoicePage.css';
import invoices from '../starter-code/data.json';
import image from '../starter-code/assets/icon-plus.svg';
import arrowDown from '../starter-code/assets/icon-arrow-down.svg';
import illustration from '../starter-code/assets/illustration-empty.svg';
import InvoiceCard from './InvoiceCard';

export default class InvoiceFeed extends Component {
  renderInvoices() {
    if (invoices) {
      let invoiceList = invoices.map((invoice) => {
        console.log(invoice.total);
        return <InvoiceCard key={invoice.id} invoice={invoice} />;
      });
      return invoiceList;
    } else {
      return (
        <div id="empty-illustration">
          <img src={illustration} alt="" />
          <h3>There is nothing here</h3>
          <p>Create an invoice by clicking the</p>
          <p>
            <span>New</span> Button and get started
          </p>
        </div>
      );
    }
  }

  invoiceCount() {
    if (invoices) {
      return invoices.length;
    } else {
      return 'No';
    }
  }

  render() {
    return (
      <div id="invoice-page">
        <div id="heading-invoice-section">
          <div id="invoice-count">
            <h3>Invoices</h3>
            <p>{this.invoiceCount()} Invoices</p>
          </div>
          <div id="filter-button">
            <button>
              Filter
              <img src={arrowDown} alt="" />
            </button>
          </div>
          <div id="new-button-container">
            <button id="new-button">
              <div>
                <img src={image} alt="" />
              </div>
              <p>New</p>
            </button>
          </div>
        </div>
        <div id="invoice-body">{this.renderInvoices()}</div>
      </div>
    );
  }
}
