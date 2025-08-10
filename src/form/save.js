import { useBlockProps } from "@wordpress/block-editor";

export default function save() {
	return (
		<div className="form-block">
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <textarea name="message" placeholder="Message" />
      <button type="submit">Send</button>
    </div>
	);
}
