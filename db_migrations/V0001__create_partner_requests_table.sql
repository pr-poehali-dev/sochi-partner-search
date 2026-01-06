CREATE TABLE IF NOT EXISTS partner_requests (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(45),
    user_agent TEXT
);

CREATE INDEX idx_partner_requests_created_at ON partner_requests(created_at DESC);

COMMENT ON TABLE partner_requests IS 'Заявки от потенциальных бизнес-партнёров';
COMMENT ON COLUMN partner_requests.name IS 'Имя потенциального партнёра';
COMMENT ON COLUMN partner_requests.phone IS 'Телефон для связи';
COMMENT ON COLUMN partner_requests.created_at IS 'Дата и время подачи заявки';
COMMENT ON COLUMN partner_requests.ip_address IS 'IP-адрес отправителя';
COMMENT ON COLUMN partner_requests.user_agent IS 'User-Agent браузера';