export default function handler(req, res) {
	const { email } = req.body;

	if (!email) {
		return res.status(400).json({ error: 'Email is required' });
	} else return res.status(200).json({ success: 'You have successfully subscribed to our newsletter' });
}
