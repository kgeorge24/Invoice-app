import React, { Component } from 'react';
import '../stylesheets/InvoiceCard.css';

export default class InvoiceCard extends Component {
  capitalizeStatus() {
    let status = this.props.invoice.status;
    let capitalizedStatus = status[0].toUpperCase() + status.substring(1);
    return capitalizedStatus;
  }

  append0ToTotal() {
    let total = this.props.invoice.total;
    let totalString = total.toString();
    let totalArray = totalString.split('');
    let index = parseInt(total.toString().indexOf('.'));

    if (totalArray[index + 2] === undefined) {
      totalArray.push('0');
    } else if (totalArray[index] === undefined) {
      totalArray.push('.', '0', '0');
    }
    return totalArray.join('');
  }

  loadInvoicePage() {}

  render() {
    return (
      <div id="invoice-outer-card">
        <div id="invoice-inner-card">
          <div id="left-card-section">
            <p className="top-section">#{this.props.invoice.id}</p>
            <p className="mid-section">Due {this.props.invoice.paymentDue}</p>
            <p className="bottom-section">${this.append0ToTotal()}</p>
          </div>
          <div id="right-card-section">
            <p className="top-section">{this.props.invoice.clientName}</p>
            <div className="mid-section">
              <div></div>
              <p>{this.capitalizeStatus()}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
