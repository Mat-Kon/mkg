import { useState } from "react";
import { SERVICES, type Service } from "@/data/services";
import { formatPrice } from "@/utils/format";
import { useT } from "@/i18n/context";
import { CONTACTS } from "@/data/contacts";
import styles from "./index.module.scss";

type Row = {
  rowId: number;
  serviceId: number | null;
  quantity: number;
};

const createEmptyRow = (rowId: number): Row => ({
  rowId,
  serviceId: null,
  quantity: 0,
});

const findService = (id: number | null): Service | undefined =>
  id === null ? undefined : SERVICES.find((s) => s.id === id);

const formatDate = (d: Date): string =>
  d.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

export const CalculatorPage = () => {
  const { t, lang } = useT();
  const [rows, setRows] = useState<Row[]>([createEmptyRow(1)]);
  const [nextId, setNextId] = useState<number>(2);

  const addRow = () => {
    setRows((prev) => [...prev, createEmptyRow(nextId)]);
    setNextId((n) => n + 1);
  };

  const removeRow = (rowId: number) => {
    setRows((prev) => {
      const next = prev.filter((r) => r.rowId !== rowId);
      return next.length === 0 ? [createEmptyRow(nextId)] : next;
    });
  };

  const updateRow = (rowId: number, patch: Partial<Omit<Row, "rowId">>) => {
    setRows((prev) =>
      prev.map((r) => (r.rowId === rowId ? { ...r, ...patch } : r)),
    );
  };

  const clearAll = () => {
    setRows([createEmptyRow(1)]);
    setNextId(2);
  };

  const rowSum = (row: Row): number => {
    const service = findService(row.serviceId);
    if (!service) return 0;
    return service.price * Math.max(0, row.quantity);
  };

  const total = rows.reduce((acc, r) => acc + rowSum(r), 0);

  const hasAnyService = rows.some((r) => r.serviceId !== null);
  const filledRows = rows.filter((r) => r.serviceId !== null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={`container ${styles.page}`}>
      <header className={styles.head}>
        <h1 className={styles.title}>{t.calculator.title}</h1>
        <p className={styles.subtitle}>{t.calculator.subtitle}</p>
      </header>

      <div className={styles.rows}>
        {rows.map((row) => {
          const service = findService(row.serviceId);
          const sum = rowSum(row);

          return (
            <div key={row.rowId} className={styles.row}>
              <div className={styles.rowMain}>
                <label className={styles.selectWrap}>
                  <span className={styles.label}>
                    {t.calculator.serviceLabel}
                  </span>
                  <select
                    className={styles.select}
                    value={row.serviceId ?? ""}
                    onChange={(e) => {
                      const value = e.target.value;
                      updateRow(row.rowId, {
                        serviceId: value === "" ? null : Number(value),
                      });
                    }}
                  >
                    <option value="">{t.calculator.servicePlaceholder}</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name[lang]}
                      </option>
                    ))}
                  </select>
                  {service && (
                    <span className={styles.hint}>
                      {formatPrice(service.price)} / {service.unit}
                    </span>
                  )}
                </label>

                <div className={styles.controls}>
                  <label className={styles.qtyWrap}>
                    <span className={styles.label}>
                      {t.calculator.qtyLabel}
                    </span>
                    <input
                      className={styles.input}
                      type="number"
                      min={0}
                      inputMode="numeric"
                      value={row.quantity === 0 ? "" : row.quantity}
                      placeholder="0"
                      onChange={(e) => {
                        const raw = e.target.value;
                        if (raw === "") {
                          updateRow(row.rowId, { quantity: 0 });
                          return;
                        }
                        const num = Number(raw);
                        if (Number.isNaN(num)) return;
                        updateRow(row.rowId, {
                          quantity: Math.max(0, Math.floor(num)),
                        });
                      }}
                    />
                  </label>

                  <div className={styles.unitBox}>
                    <span className={styles.label}>
                      {t.calculator.unitLabel}
                    </span>
                    <span className={styles.unit}>
                      {service ? service.unit : "—"}
                    </span>
                  </div>

                  <div className={styles.sumBox}>
                    <span className={styles.label}>
                      {t.calculator.sumLabel}
                    </span>
                    <span className={styles.sum}>
                      {sum > 0 ? formatPrice(sum) : "—"}
                    </span>
                  </div>

                  <button
                    type="button"
                    className={styles.remove}
                    onClick={() => removeRow(row.rowId)}
                    aria-label={t.calculator.removeTitle}
                    title={t.calculator.removeTitle}
                  >
                    ×
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.addBtn} onClick={addRow}>
          {t.calculator.addButton}
        </button>
        <button
          type="button"
          className={styles.clearBtn}
          onClick={clearAll}
          disabled={!hasAnyService && rows.length === 1}
        >
          {t.calculator.clearButton}
        </button>
        <button
          type="button"
          className={styles.printBtn}
          onClick={handlePrint}
          disabled={!hasAnyService}
        >
          {t.calculator.printButton}
        </button>
      </div>

      {/* Печатная версия: скрыта на экране, видна только при печати */}
      <div className={styles.printOnly}>
        <div className={styles.printHeader}>
          <div className={styles.printBrand}>Матвеев Мастер</div>
          <div className={styles.printMeta}>
            <div>Ремонт и обслуживание окон и балконов</div>
            <div>{CONTACTS.phoneDisplay}</div>
            <div>{CONTACTS.email}</div>
          </div>
        </div>

        <div className={styles.printTitle}>{t.calculator.printTitle}</div>
        <div className={styles.printDate}>
          {t.calculator.printDate} {formatDate(new Date())}
        </div>

        <table className={styles.printTable}>
          <thead>
            <tr>
              <th>№</th>
              <th>{t.calculator.serviceLabel}</th>
              <th>{t.calculator.unitLabel}</th>
              <th>{t.calculator.qtyLabel}</th>
              <th>{t.calculator.sumLabel}</th>
              <th>{t.calculator.totalFinal}</th>
            </tr>
          </thead>
          <tbody>
            {filledRows.map((row, i) => {
              const service = findService(row.serviceId)!;
              const sum = rowSum(row);
              return (
                <tr key={row.rowId}>
                  <td>{i + 1}</td>
                  <td>{service.name[lang]}</td>
                  <td>{service.unit}</td>
                  <td>{row.quantity}</td>
                  <td>{formatPrice(service.price)}</td>
                  <td>{formatPrice(sum)}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={5} className={styles.printTotalLabel}>
                {t.calculator.totalWorks}
              </td>
              <td className={styles.printTotalValue}>{formatPrice(total)}</td>
            </tr>
            <tr>
              <td colSpan={5} className={styles.printTotalLabel}>
                {t.calculator.totalDelivery}
              </td>
              <td className={styles.printTotalValue}>{t.common.byAgreement}</td>
            </tr>
            <tr>
              <td colSpan={5} className={styles.printTotalLabel}>
                {t.calculator.totalLifting}
              </td>
              <td className={styles.printTotalValue}>{t.common.byAgreement}</td>
            </tr>
          </tfoot>
        </table>

        <div className={styles.printFooter}>{t.calculator.printFooter}</div>
      </div>

      <div className={styles.total}>
        <div className={styles.totalRow}>
          <span className={styles.totalLabel}>{t.calculator.totalWorks}</span>
          <span className={styles.totalValue}>{formatPrice(total)}</span>
        </div>
        <div className={styles.totalRow}>
          <span className={styles.totalLabel}>
            {t.calculator.totalDelivery}
          </span>
          <span className={styles.totalNote}>{t.common.byAgreement}</span>
        </div>
        <div className={styles.totalRow}>
          <span className={styles.totalLabel}>{t.calculator.totalLifting}</span>
          <span className={styles.totalNote}>{t.common.byAgreement}</span>
        </div>
        <div className={`${styles.totalRow} ${styles.totalFinal}`}>
          <span className={styles.totalLabel}>{t.calculator.totalFinal}</span>
          <span className={styles.totalValue}>{formatPrice(total)}</span>
        </div>
      </div>

      <div className={styles.contactBlock}>
        <div className={styles.contactTitle}>{t.contactCta.title}</div>
        <div className={styles.contactGrid}>
          <a
            href={`https://wa.me/${CONTACTS.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.contactBtn} ${styles.whatsapp}`}
          >
            {t.contactCta.whatsapp}
          </a>
          <a
            href={`https://t.me/${CONTACTS.telegram}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.contactBtn} ${styles.telegram}`}
          >
            {t.contactCta.telegram}
          </a>
          <a
            href={`mailto:${CONTACTS.email}`}
            className={`${styles.contactBtn} ${styles.email}`}
          >
            {t.contactCta.email}
          </a>
          <a
            href={`tel:${CONTACTS.phone}`}
            className={`${styles.contactBtn} ${styles.phone}`}
          >
            {t.contactCta.phone}
          </a>
        </div>
      </div>
    </div>
  );
};
