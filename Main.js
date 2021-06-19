import React from "react";
import { numberWithCommas } from "./utils";

const laporans = [
  {
    tanggal: "1 Januari 2021",
    keterangan: "saldo awal",
    debit: 21000000,
    kredit: 0,
  },
  {
    tanggal: "1 Januari 2021",
    keterangan: "Gaji Karyawan",
    debit: 0,
    kredit: 3000000,
  },
  {
    tanggal: "1 Januari 2021",
    keterangan: "Service AC",
    debit: 0,
    kredit: 500000,
  },
  {
    tanggal: "1 Januari 2021",
    keterangan: "Pembelian ATK",
    debit: 0,
    kredit: 200000,
  },
  {
    tanggal: "2 Januari 2021",
    keterangan: "Pembayaran Order #3D20210001",
    debit: 500000,
    kredit: 0,
  },
  {
    tanggal: "2 Januari 2021",
    keterangan: "Pembayaran Order #3D20210002",
    debit: 200000,
    kredit: 0,
  },
  {
    tanggal: "5 Januari 2021",
    keterangan: "Pembayaran Order #3D20210005",
    debit: 500000,
    kredit: 0,
  },
  {
    tanggal: "9 Januari 2021",
    keterangan: "Pembayaran Order #3D20210021",
    debit: 100000,
    kredit: 0,
  },
  {
    tanggal: "14 Januari 2021",
    keterangan: "Pembelian Unit PC",
    debit: 0,
    kredit: 5970000,
  },
  {
    tanggal: "14 Januari 2021",
    keterangan: "Pembayaran Order #3D20210007",
    debit: 350000,
    kredit: 0,
  },
  {
    tanggal: "18 Januari 2021",
    keterangan: "Pembayaran Order #3D202100011",
    debit: 275000,
    kredit: 0,
  },
  {
    tanggal: "18 Januari 2021",
    keterangan: "Pembayaran Order #3D20210012",
    debit: 275000,
    kredit: 0,
  },
  {
    tanggal: "25 Januari 2021",
    keterangan: "Pembayaran Order #3D20210016",
    debit: 500000,
    kredit: 0,
  },
];

const total_kredit = laporans.reduce((total_cicilan, laporan) => {
  return total_cicilan + laporan.kredit;
}, 0);

const total_debit = laporans.reduce((total_cicilan, laporan) => {
  return total_cicilan + laporan.debit;
}, 0);

let saldo = 0;

const Map = () => {
  return (
    <div className='Map container mt-5 mb-5'>
      <div className='py-2 mb-1 bg-warning text-center'>
        <h3>Laporan Keuangan CV Berkah Maju</h3>
        <h5>Januari 2021</h5>
      </div>
      <table class='table table-bordered border-primary table-striped table-hover text-center '>
        <thead>
          <tr>
            <th rowSpan='2' className='align-middle'>
              NO
            </th>
            <th rowSpan='2' className='align-middle'>
              Tanggal
            </th>
            <th rowSpan='2' className='align-middle'>
              Ket/Uraian
            </th>
            <th colSpan='2' className='align-middle'>
              Jumlah
            </th>
            <th rowSpan='2' className='align-middle'>
              Saldo
            </th>
          </tr>
          <tr>
            <th>Debit</th>
            <th>Kredit</th>
          </tr>
        </thead>
        <tbody>
          {laporans.map((laporan, index) => {
            saldo = saldo + laporan.debit - laporan.kredit;
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{laporan.tanggal}</td>
                <td>{laporan.keterangan}</td>
                <td>Rp. {numberWithCommas(laporan.debit)}</td>
                <td>Rp. {numberWithCommas(laporan.kredit)}</td>
                <td>Rp. {numberWithCommas(saldo)}</td>
              </tr>
            );
          })}

          <tr className='fw-bold'>
            <td colSpan='3'>TOTAL</td>
            <td>Rp. {numberWithCommas(total_debit)}</td>
            <td>Rp. {numberWithCommas(total_kredit)}</td>
            <td>Rp. {numberWithCommas(total_debit - total_kredit)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Map;
