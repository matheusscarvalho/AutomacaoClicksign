import http from 'k6/http';
import { check, sleep } from 'k6';
import { ENVIRONMENTS } from './config/env.js';

export let options = {
    stages: [
        { duration: '30s', target: 10 }, // ramp-up
        { duration: '1m', target: 10 },  // sustentação
        { duration: '30s', target: 0 },  // ramp-down
    ],
};

const envParam = __ENV.ENV || 'dev';
const BASE_URL = ENVIRONMENTS[envParam] || ENVIRONMENTS.dev;

export default function () {
    // 1. Listar usuários
    let res = http.get(`${BASE_URL}/usuarios`);
    check(res, {
        'GET /usuarios status 200': (r) => r.status === 200,
        'GET /usuarios tem array': (r) => r.body && r.body.includes('usuarios'),
    });
    sleep(1);

    // 2. Cadastrar usuário
    const payload = JSON.stringify({
        nome: `Teste K6 ${Math.random().toString(36).substring(7)}`,
        email: `k6_${Math.random().toString(36).substring(7)}@qa.com.br`,
        password: 'testek6',
        administrador: 'true'
    });
    const headers = { 'Content-Type': 'application/json' };
    let resPost = http.post(`${BASE_URL}/usuarios`, payload, { headers });
    check(resPost, {
        'POST /usuarios status 201 ou 400': (r) => r.status === 201 || r.status === 400,
        'POST /usuarios tem mensagem': (r) => r.body && r.body.includes('message'),
    });
    sleep(1);

    // 3. Buscar usuário por ID (se cadastrado)
    if (resPost.status === 201) {
        const userId = resPost.json()._id;
        let resGetId = http.get(`${BASE_URL}/usuarios/${userId}`);
        check(resGetId, {
            'GET /usuarios/{id} status 200': (r) => r.status === 200,
            'GET /usuarios/{id} tem email': (r) => r.body && r.body.includes('email'),
        });
        sleep(1);
    }
}
