import './Notification.css';

function Notification({ show, message }) {
  if (!show) return null;

  return (
    <div className="notification">
      <div className="notification-content">
        ℹ️ {message}
      </div>
    </div>
  );
}

export default Notification;
