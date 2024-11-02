export async function post({ request }) {
  const data = await request.formData();
  const name = data.get('name');
  const email = data.get('email');
  const phone = data.get('phone');
  const message = data.get('message');

  // Hier zou je normaal de data opslaan in een database en een e-mail sturen naar de makelaar
  console.log('Nieuwe lead:', { name, email, phone, message });

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}