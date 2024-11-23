import React, { use } from "react";

interface CategoryChoosePopupProps {
  onClose: () => void;
}

const CategoryChoosePopup: React.FC<CategoryChoosePopupProps> = ({ onClose }) => {
  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        {/* Header */}
        <div style={styles.header}>
          <span style={styles.title}>Buat Plan</span>
          <button style={styles.closeButton} onClick={onClose}>
            X
          </button>
        </div>

        {/* Content */}
        <div style={styles.content}>
          <div style={styles.row}>
            <label>Nama Plan</label>
            <input
              type="text"
              placeholder="masukkan nama plan"
              style={styles.input}
            />
          </div>

          <div style={styles.row}>
            <label>Deadline</label>
            <div style={styles.deadlineWrapper}>
              <span style={styles.text}>30 Februari 2029</span>
              <button style={styles.editButton}>UBAH</button>
            </div>
          </div>

          <div style={styles.row}>
            <label>Target</label>
            <input
              type="text"
              value="Rp.10.000.000"
              readOnly
              style={styles.input}
            />
          </div>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <button style={styles.planButton}>Buat Plan</button>
        </div>
      </div>
    </div>
  );
};

// Define the styles with the appropriate types
const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    width: "400px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #e0e0e0",
    paddingBottom: "10px",
    marginBottom: "10px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  closeButton: {
    background: "none",
    border: "none",
    color: "red",
    fontSize: "16px",
    cursor: "pointer",
  },
  content: {
    marginBottom: "20px",
  },
  row: {
    marginBottom: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#cce7ff",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "8px",
    width: "200px",
  },
  deadlineWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  text: {
    fontSize: "14px",
  },
  editButton: {
    backgroundColor: "#ffd69b",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
  },
  footer: {
    textAlign: "center",
  },
  planButton: {
    backgroundColor: "#ffd69b",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default CategoryChoosePopup;
