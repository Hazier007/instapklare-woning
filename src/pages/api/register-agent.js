export async function post({ request }) {
  const data = await request.formData();
  const agentData = {
    companyName: data.get('companyName'),
    name: data.get('name'),
    email: data.get('email'),
    phone: data.get('phone'),
    website: data.get('website')
  };

  // Hier zou je normaal de data opslaan in een database
  console.log('Nieuwe makelaar registratie:', agentData);

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}